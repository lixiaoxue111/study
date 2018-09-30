define(function () {
    function Dialog(obj){
        var _this = this;
        this.$dialogMask = $('<div class="dialog-mask"></div>');
        this.$dialogBox = $('<div class="dialog-box"></div>').css({
            width:obj.width,
            height:obj.height
        });

        this.$dialogTitle = $('<div class="dialog-title"></div>');
        this.$dialogContent = $('<div class="dialog-content"></div>').load(obj.content);
        this.$dialogH2 = $('<h2>标题</h2>').html(obj.title);

        this.$dialogClose = $('<span class="dialog-close">X</span>').on('click',function(){
            _this.$dialogMask.remove();
        });
    }

    Dialog.prototype.open = function(){
        this.$dialogMask.append(this.$dialogBox);
        this.$dialogBox.append(this.$dialogTitle).append(this.$dialogContent);
        this.$dialogTitle.append(this.$dialogH2).append(this.$dialogClose);
        $('body').append(this.$dialogMask);
    };
    Dialog.prototype.close = function(){
        this.$dialogMask.remove();
    };

    return Dialog;
});