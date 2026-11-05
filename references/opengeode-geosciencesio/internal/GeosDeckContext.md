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

# struct GeosDeckContext


 Model data needed to translate a PhysicalProblem into a GEOS deck



## Members

```cpp
public vector solid_regions

```

```cpp
public flat_hash_map regions_by_uuid

```

```cpp
public flat_hash_map merged_blocks

```

```cpp
public optional porosity_array

```

```cpp
public optional mean_porosity

```

```cpp
public optional permeability_array

```

```cpp
public optional mean_permeability

```

```cpp
public vector boundary_fraction_phases

```

```cpp
public bool has_boundary_pressure

```

```cpp
public bool has_boundary_temperature

```

```cpp
public optional bulk_modulus

```

```cpp
public optional shear_modulus

```

```cpp
public optional density

```

```cpp
public optional biot_coefficient

```

```cpp
public optional grain_bulk_modulus

```

```cpp
public optional thermal_expansion

```

```cpp
public optional initial_stress

```

```cpp
public vector well_names

```



