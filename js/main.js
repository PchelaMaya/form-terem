//Проверка на заполнение email и password

$('form').submit(function() {
    var $form = $(this);
    $form.find('.error').remove();

    if ($form.find('input[name=email]').val() === '') {
        $form.find('input[name=email]')
          .after('<div class="error" style="color:red;">Введите адрес почты</div>');
        return false;
    }
    if ($form.find('input[name=password]').val() === '') {
        $form.find('input[name=password]')
          .after('<div class="error" style="color:red;">Введите пароль</div>');
        return false;
    }
});

//Вывод в консоль данных с формы

function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
  
    console.log(data)     
}

//Создание запроса

function createRequest()
{
    var Request = false;
    if (window.XMLHttpRequest)
    {
        Request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
            try
            {
                Request = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (CatchException)
            {
                Request = new ActiveXObject('Msxml2.XMLHTTP');
            }
    }

    if (!Request)
    {
        alert('Невозможно создать XMLHttpRequest');
    }
return Request;
}

function sendAjax(url,email,password)
{
    let req = createRequest();
    alert(req);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if(req.status == 200) alert('Отправка формы выполнена');
        }
    }
    req.open('GET',url+'?email='+email+'&password='+password,true);
    req.send(null);
}

function sendForm(e)
{
    let form=e.target;
    let url=form.action;
    let email=document.getElementById('DropdownFormEmail').value;
    let password=document.getElementById('DropdownFormPassword').value;
    sendAjax(url,email,password);
}