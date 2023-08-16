function handelImageChange(imgId) {
    const showImage = document.querySelector('#showImage')
    if (imgId === 'image1') {
        showImage.setAttribute('src', 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600')
    } else if (imgId === 'image2') {
        showImage.setAttribute('src', 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600')
    } else if (imgId === 'image3') {
        showImage.setAttribute('src', 'https://images.pexels.com/photos/4379289/pexels-photo-4379289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    } else if (imgId === 'image4') {
        showImage.setAttribute('src', 'https://images.pexels.com/photos/15228782/pexels-photo-15228782/free-photo-of-a-person-wearing-a-smartwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    } else if (imgId === 'image5') {
        showImage.setAttribute('src', 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600')
    }
}

function handelColorChange(color) {
    if (color === 'color1') {
        document.querySelector('#allSection').style.backgroundColor = '#a3e635'
    } else if (color === 'color2') {
        document.querySelector('#allSection').style.backgroundColor = '#14b8a6'
    } else if (color === 'color3') {
        document.querySelector('#allSection').style.backgroundColor = '#2563eb'
    } else if (color === 'color4') {
        document.querySelector('#allSection').style.backgroundColor = '#c026d3'
    }
}


document.querySelector('#apply').addEventListener('click', () => {
    const input = document.querySelector('#diccound');
    const inputValue = input.value;
    input.value = ''
    if (inputValue === 'DISC30') {
        const display = document.querySelector('#valueDisplay').innerText;
        const convatValue = parseFloat(display)
        const calculateValue = (1000 * 30) / 100
        const total = convatValue - calculateValue
        document.querySelector('#discount').innerText = `Please pay $${total}`
        document.querySelector('#useDis').innerText = 'Used Discount Code'
        document.querySelector('#useDis').setAttribute('class' , 'text-[#84cc16]')

    } else {
        document.querySelector('#discount').innerText = `Please pay $1000`
        document.querySelector('#useDis').innerText = 'Without Discount Code'
        document.querySelector('#useDis').setAttribute('class' , 'text-[#dc2626]')
    }

})