var cacsanpham = [
    'táo',
    'chuối',
    'bưởi',
    'chanh',
    'dưa hấu'
];
hienthilai();
function hienthilai(){
    var str = '<tr>\n' + 
          '     <td> Các sản phẩm </td>\n' + 
          '     <td></td>\n' +
          '<td>' + cacsanpham.length +' sản phẩm </td>\n' +
          '</tr>';
          for(var i=0; i< cacsanpham.length; i++){
            str += '<tr><td>' + cacsanpham[i] + '</td>' +
            '<td><button onclick="suasanpham('+ i +')">Edit</button></td>' + 
            '<td><button onclick="xoasanpham('+ i +')">Delete</button></td></tr>'
          }
document.getElementById('bangsanpham').innerHTML = str ;
}
function themsanpham(){
    var tensanpham = document.getElementById('add').value;
    document.getElementById('add').value="";
    cacsanpham.push(tensanpham);
    console.log(cacsanpham);
    hienthilai();
}
function xoasanpham(index){
        cacsanpham.splice(index,1);
        hienthilai();
}
function suasanpham(index){
   var str = '';
   str = '<input type="text" id="editsanpham" value="' + cacsanpham[index]+'"><button onclick="luusanpham('+index+')">Lưu</button>';
  
   document.getElementById('edit').innerHTML = str;
}
function luusanpham(index){
  cacsanpham[index]= document.getElementById('editsanpham').value;
  document.getElementById('edit').innerHTML='';
  hienthilai();
}