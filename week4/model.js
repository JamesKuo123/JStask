export default {
    template:  
    `<div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
        <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel ">
            <span>{{isNew ?'新增房間':'重訂房間'}}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="imageUrl">輸入圖片網址</label>
                        <input id="imageUrl" v-model="tempProduct.imageUrl[0]" type="text" class="form-control"
                            placeholder="請輸入圖片連結">
                    </div>

                    <div class="form-group">
                        <label for="cust">上傳圖片網址</label>
                        <input type="file" id="cust" class="form-control" @change="upload()">
                    </div>
                    <img class="img-fluid" :src="tempProduct.imageUrl[0]"  alt="">
                </div>
                <div class="col-sm-8">
                    <div class="form-group">
                        <label for="title">標題</label>
                        <input id="tempProduct.title" v-model="tempProduct.title" type="text"
                            class="form-control" placeholder="請輸入標題">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input id="tempProduct.category" v-model="tempProduct.category" type="text"
                                class="form-control" placeholder="請輸入分類">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="unit">單位</label>
                            <input id="tempProduct.unit" v-model="tempProduct.unit" type="text"
                                class="form-control" placeholder="請輸入單位">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="origin_price">原價</label>
                            <input id="tempProduct.origin_price" v-model="tempProduct.origin_price"
                                type="text" class="form-control" placeholder="請輸入原價">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input id="tempProduct.price" v-model="tempProduct.price" type="text"
                                class="form-control" placeholder="請輸入售價">
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="description">產品描述</label>
                        <textarea name="description" id="tempProduct.description"
                            v-model="tempProduct.description" class="form-control"
                            placeholder="請輸入產品描述"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="content">說明內容</label>
                        <textarea name="content" id="tempProduct.content" v-model="tempProduct.content"
                            class="form-control" placeholder="請輸入說明內容"></textarea>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label for="enabled" class="form-check-label"></label>
                            <input type="checkbox" class="form-check-input" name="enabled"
                                id="tempProduct.enabled" v-model="tempProduct.enabled">額外服務
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateData()" >確認</button>
        </div>
    </div>
</div>`,
data(){
    return{
        //資料結構
    };
},
props:['tempProduct','api','isNew','token'],
methods:{
    updateData(){
        let http = 'post';
        let url =`${this.api.apiPath}${this.api.uuid}/admin/ec/product`;
        if(!this.isNew){
            http ='patch';
            url =`${this.api.apiPath}${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`;
        }
        axios[http](url,this.tempProduct).then((res)  =>{
            // console.log(res);
            this.$emit("update");
        }).catch((error)=>{
            console.log(error);
        });
    },
    upload() {
        // 選取 DOM 中的檔案資訊
        let cust = document.querySelector('#cust').files[0];

        // 轉成 Form Data
        const formData = new FormData();
        formData.append('file', cust);

        // 路由、驗證
        axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
        const el = `${this.api.apiPath}${this.api.uuid}/admin/storage`;
        axios.post(el, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
                this.tempProduct.imageUrl.push(res.data.data.path);
                document.querySelector('#cust').value = '';//讓input清空
        });
        // 請自行完成 Ajax 範例
    },
},
};
