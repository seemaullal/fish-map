var animals =  [ { code: '100', animal: 'Steller (northern) sea lion' },
 { code: '047', animal: 'Atlantic white-sided dolphin' },
 { code: '002', animal: 'North Atlantic right whale 101' },
 { code: '049', animal: 'Pacific white-sided dolphin' },
 { code: '005', animal: 'Gray whale 105' },
 { code: '053', animal: 'Common dolphin' },
 { code: '007', animal: 'Fin whale 115' },
 { code: '054', animal: 'Bottlenose dolphin' },
 { code: '010', animal: 'Minke whale 116' },
 { code: '055', animal: 'Grampus (Risso’s) dolphin' },
 { code: '011', animal: 'Humpback whale 117' },
 { code: '058', animal: 'Spotted dolphin' },
 { code: '012', animal: 'Sperm `whale 121' },
 { code: '060', animal: 'Spinner dolphin' },
 { code: '016', animal: 'Beluga whale 124' },
 { code: '061', animal: 'Striped dolphin' },
 { code: '038', animal: 'False killer whale 127' },
 { code: '063', animal: 'Northern right whale dolphin' },
 { code: '039', animal: 'Killer whale 129' },
 { code: '068', animal: 'Harbor porpoise' },
 { code: '221', animal: 'Pilot whale 130' },
 { code: '072', animal: 'Dall’s porpoise' },
 { code: '230', animal: 'Beaked whale 131' },
 { code: '235', animal: 'Unidentified small cetacean' },
 { code: '231', animal: 'Bryde’s whale 132' },
 { code: '232', animal: 'Dwarf sperm whale 203' },
 { code: '210', animal: 'Unidentified baleen whale 204' },
 { code: '220', animal: 'Unidentified toothed whale' } ];

 var injuries = [ '01 - Visible blood flow',
 '08- Listlessness or inability to defend',
 '02- Loss of/damage to appendage/jaw',
 '09- Inability to swim or dive',
 '03- Inability to use appendage(s)',
 '10- Equilibrium imbalance',
 '04- Asymmetry in shape of body or body position',
 '11- Ingestion of gear',
 '05- Any noticeable swelling or hemorrhage (bruising)',
 '12- Released trailing gear/gear perforating body',
 '06- Laceration (deep cut)',
 '13- Other wound or injury',
 '07- Rupture or puncture of eyeball',
 '14- Killed' ];

var data = [ ];

for (var i=0; i< 2000; i++) {
	data[i] = {
		animal : animals[Math.floor(Math.random() * animals.length)],
		injuries : injuries[Math.floor(Math.random() * injuries.length)],
		longitude : (Math.random() * (180 - (-180)) + (-180)).toFixed(3) * 1,
		latitude : (Math.random() * (90 - (-90)) + (-90)).toFixed(3) * 1
	};
}

console.log(data);

