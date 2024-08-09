export default class Building {
	constructor(sqft) {
		if (new.target !== Building && new.target.prototype.evacuationWarningMessage === undefined) {
			throw new Error('Class extending Building must override evacuationWarningMessage');
		}
		this._sqft = sqft;
	}
	
	get sqft() {
		return this._sqft;
	}

	set sqft(sqft) {
		if (sqft === undefined || sqft === null) {
			throw new Error('sqft must be defined');
		} else if (typeof sqft === 'string') {
			throw new Error('sqft must be a number');
		} else if (typeof sqft !== 'number' || sqft <= 0) {
			throw new Error('sqft must be a positive number');
		} else if (!Number.isFinite(sqft)) {
			throw new Error('sqft must be a finite number');
		}
		this._sqft = Number(sqft);
	}
}
