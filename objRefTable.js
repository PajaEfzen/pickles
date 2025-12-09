const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop
	];
};
self.C3_JsPropNameTable = [
	{Is_Singing: 0},
	{Is_Singing2: 0},
	{pickle001: 0},
	{Mouse: 0},
	{Audio: 0},
	{pickle2: 0},
	{pickle3: 0},
	{pickle4: 0},
	{bcg: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0}
];

self.InstanceType = {
	pickle001: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	pickle2: class extends self.ISpriteInstance {},
	pickle3: class extends self.ISpriteInstance {},
	pickle4: class extends self.ISpriteInstance {},
	bcg: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {}
}