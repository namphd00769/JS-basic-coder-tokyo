function Crush(){
	this.address = [];
}

Crush.prototype.go = function(country){
	this.address.push(Japan) ;
};



/**
 * git checkout -b <branch> tạo ra 1 branch mới nếu branch đó chưa tồn tại , và nhảy vào branch đó làm việc
 * (vừa tạo mới và vừa checkout)
 */

/**
 * git checkout <branch> chuyển sang branch đó làm việc
 * vd :   git checkout master   ----> nếu cảm thấy đang làm feature crush.js mà bị lỗi , muốn bỏ hẳn file đó đi
 * ===> thì chỉ việc quay lại branch master bằng cú pháp như trên. Nhưng file đó vẫn hiển thị trên EDITOR
 * mà chưa mất hẳn , nếu vẫn muốn sửa thì có thể gõ :  git checkout feature/crush-class => chính là tên của branch 
 *
 * Note: nếu muốn chuyển sang branch master để làm việc thì trước tiên cần commit branch hiện tại
 * (feature/crush-class) của file crush.js
 * 
 */

/**
 * Merging là: Khi mình đã hài lòng với feature mà vừa làm xong ,  thì mình phảo Merging nó vào branch master
 * có nghĩa là kéo thay đổi ở branch feature/crush-class vào branch master
 *
 * B1: Mình phải checkout sang branch master để làm việc
 *
 * B2: Mình sẽ merging branch feature/crush-class vào branch master
 *
 * B3: XÓA branch dư thừa (feature/crush-class) : git branch -D feature/crush-class
 *
 * ----> Note: Thường là chỉ cần 1 branch master duy nhất còn tồn tại để có thể deyploy lên server
 */