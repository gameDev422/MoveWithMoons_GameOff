App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
// Ship.setVelocity(0,0)
// wade.app.onShipDeaded()
        // level = 0;
        // wade.storeLocalObject("Level", level);
		wade.loadScene("scene0.wsc", true, function()
        {
            if (!wade.retrieveLocalObject("muted"))
            wade.preloadAudio('Never_Could_Have_Happened_Before.mp3', true
            ,true);
        });
        wade.app.onWin = function(){
            if (!wade.retrieveLocalObject("muted") 
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.preloadAudio('WinNoise.wav', true);
            console.log("Win")
        }
        wade.app.onShipDeaded = function(){
            if (!wade.retrieveLocalObject("muted")
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.loadAudio('ShipDeath.wav', true);
        }
        wade.app.onWin2 = function(){
            if (wade.isKeyDown("m"))
            {
                wade.clearScene()
        		wade.loadScene("scene0.wsc", true, function(){})
            }
            if (wade.isKeyDown("r"))
            {
                wade.app.onShipDeaded()
            }
        }
        wade.app.onObj = function(){
            if (!wade.retrieveLocalObject("muted")
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.loadAudio('2Objective.wav', true);
        }
        wade.app.onMoonPlace = function(){
            if (!wade.retrieveLocalObject("muted")
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.loadAudio('PopSelectNoise.wav', true);
        }
        wade.app.onMoonDeaded = function(){
            if (!wade.retrieveLocalObject("muted")
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.loadAudio('MoonDestroy.wav', true);
        }
        wade.app.onTeleport = function(){
            if (!wade.retrieveLocalObject("muted")
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.loadAudio('WeirdTeleport.wav', true);
        }
        wade.app.onGameWin = function(){
            if (!wade.retrieveLocalObject("muted")
            && !wade.retrieveLocalObject("SFXmuted"))
            wade.loadAudio('CheeringSFX.mp3', true);
        }
	};
};