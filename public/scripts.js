const Mask = {
  apply(input, func) {
    setTimeout(function() {
      input.value = Mask[func](input.value)
    }, 1)
  },
  formatBRL(value) {
    value = value.replace(/\D/g, "")

    return value = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100)
  },
  formatCPF(value) {

  }
}

const PhotosUpload = {
  
  uploadLimit: 6,

  handleFileInput(event) {
    
    const { files: fileList } = event.target
    const { uploadLimit } = PhotosUpload

    if (fileList.length > uploadLimit) {
      alert(`Envie no máximo ${uploadLimit} fotos`)
      event.preventDefault()
      return
    }

    Array.from(fileList).forEach(file => {
      const reader = new FileReader()

      reader.onload = () => {
        const image = new Image()
        image.src = String(reader.result)

        const container = document.createElement('div')
        container.classList.add('photo')

        container.onclick = () => alert('remover foto')

        container.appendChild(image)

        document.querySelector('#photos-preview').appendChild(container)
      }

      reader.readAsDataURL(file)
    })
  }
}
