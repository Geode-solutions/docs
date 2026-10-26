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

# struct HydrocarbonPvtTable


 Formation volume factor and viscosity of a hydrocarbon phase versus pressure (PVDO/PVDG-like table)



## Members

```cpp
public PHASE phase

```

```cpp
public vector pressures

```

```cpp
public vector formation_volume_factors

```

```cpp
public vector viscosities

```



