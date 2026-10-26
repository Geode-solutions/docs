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

# struct Material


 Rock constants of model regions. Spatially varying porosity and permeability are read from the model PhysicalProperties; the constants here are used only where no such property exists.



## Members

```cpp
public basic_string name

```

```cpp
public vector regions

```

```cpp
public double pore_compressibility

```

```cpp
public double reference_pressure

```

```cpp
public optional porosity

```

```cpp
public optional permeability

```

```cpp
public shared_ptr relative_permeability

```

```cpp
public shared_ptr capillary_pressure

```

```cpp
public optional thermal

```



