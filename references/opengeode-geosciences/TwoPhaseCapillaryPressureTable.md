<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct TwoPhaseCapillaryPressureTable


 Capillary pressure (Pa) versus wetting phase saturation



## Members

```cpp
public PHASE wetting_phase

```

```cpp
public PHASE non_wetting_phase

```

```cpp
public SaturationTable pressure

```



