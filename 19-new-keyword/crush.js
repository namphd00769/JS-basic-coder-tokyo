function Crush(name, age, address){

}

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
