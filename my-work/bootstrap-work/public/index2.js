let count = 50

function indexes(selector, page, range) {
  if (page > 1) {
    $(selector).append(
      '<li class="page-item"><a class="page-link" href="./' +
        (page - 1) +
        '">Previous</a></li>'
    )
  }
  for (let i = 1; i <= count; i++) {
    if (i == 1 && page - range > 1) {
      $(selector).append(
        '<li class="page-item"><a class="page-link" href="./1">1</a></li>'
      )
      if (page - range > 2) {
        $(selector).append(
          '<li class="page-item disabled"><a class="page-link" href="#">...</a></li>'
        )
      }
    }
    if (i >= page - range && i <= page + range) {
      if (i != page) {
        $(selector).append(
          '<li class="page-item"><a class="page-link" href="./' +
            i +
            '">' +
            i +
            '</a></li>'
        )
      } else {
        $(selector).append(
          '<li class="page-item active"><a class="page-link" href=""./' +
            i +
            '"">' +
            i +
            '</a></li>'
        )
      }
    }
    if (i == count && page + range < count) {
      if (page + range < count - 1) {
        $(selector).append(
          '<li class="page-item disabled"><a class="page-link" href="#">...</a></li>'
        )
      }
      $(selector).append(
        '<li class="page-item"><a class="page-link" href="./' +
          count +
          '">' +
          count +
          '</a></li>'
      )
    }
  }
  if (page < count) {
    $(selector).append(
      '<li class="page-item"><a class="page-link" href="./' +
        (page + 1) +
        '">Next</a></li>'
    )
  }
}

indexes('.pag1', 1, 3)
indexes('.pag2', 15, 3)
indexes('.pag3', 15, 1)
indexes('.pag4', count, 3)
