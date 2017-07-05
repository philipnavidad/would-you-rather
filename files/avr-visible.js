AFRAME.registerComponent('avr-visible',
{
    schema: {default: true},
    init: function () {
        this.el.addEventListener('model-loaded', this.setVisibility.bind(this));
        this.el.addEventListener('object3dset', this.setVisibility.bind(this));
        this.el.addEventListener('loaded', this.setVisibility.bind(this));
    },
    setVisibility: function(){
        if (this.el.object3DMap.mesh) {
            this.el.object3DMap.mesh.visible = this.data;
        }
        this.el.object3D.traverse(function(o){
            o.visible = this.data;
        }.bind(this));
    },
    update: function () {
        this.setVisibility();
    }
});
