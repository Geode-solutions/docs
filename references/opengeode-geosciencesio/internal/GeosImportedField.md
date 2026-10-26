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

# struct GeosImportedField


 Model array imported in GEOS, possibly copied under a new VTU name



## Members

```cpp
public GeosCellArray source

```

```cpp
public basic_string vtu_name

```

```cpp
public basic_string geos_name

```



## Functions

### is_copy

```cpp
public bool is_copy()
```




