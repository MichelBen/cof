/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

export class CofBaseSheet extends ActorSheet {

    /**
     * @name getPackPrefix
     * @description obtenir le préfixe utilisé pour les compendiums
     * 
     * @returns {String} L'identifiant du compendium
     */
    getPackPrefix() { return "cof-srd"; }

    /**
     * @name getPathRoot
     * @description obtenir le chemin du système ou module
     * 
     * @returns {String} le chemin
     */
    getPathRoot() { return "systems/cof/"; }

    /**
     * @name getLogoPath
     * @description obtenir l'url de l'image du logo
     * 
     * @returns {String} L'url du logo après le PathRoot
     */
    getLogoPath() { return "/ui/logo-banner.webp"; }

    /** @override */
	getData(options) {
        const data = super.getData(options);
        const actorData = data.data;
        
        data.actor = actorData;
        data.data = actorData.data;

        data.logoPath = this.getPathRoot() + this.getLogoPath();
		data.isGm = game.user.isGM;
        
        return data;
	}
}
