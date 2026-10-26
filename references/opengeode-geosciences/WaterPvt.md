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

# struct WaterPvt


 Water properties (PVTW-like)



## Members

```cpp
public double reference_pressure

```

```cpp
public double formation_volume_factor

```

```cpp
public double compressibility

```

```cpp
public double viscosity

```



