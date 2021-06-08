const imageContainer = document.querySelector('.image-container')
        const generateBtn = document.querySelector('#generate')
        generateBtn.addEventListener('click' , getImage)
        getImage()
        function getImage() {
            fetch('https://dog.ceo/api/breeds/image/random')
              .then(function (res) {
                 return res.json()
          }).then(function (data) {
              let picture = data.message
              imageContainer.style.backgroundImage = `url(${picture})`

          })

        }
