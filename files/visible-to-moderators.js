AFRAME.registerComponent('visible-to-moderators',
{
    dependencies: ['avr-visible'],
    init: function () {
        altspace.getUser().then(function (userInfo) {
            if (userInfo.isModerator) {
                this.el.setAttribute('avr-visible', true);
            }
        }.bind(this));
    }
});
