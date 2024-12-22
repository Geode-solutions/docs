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

# struct InformationToExtract


## Members

```cpp
public vector point_set_ids

```

```cpp
public vector curve_ids

```

```cpp
public vector surface_ids

```



## Functions

### InformationToExtract

```cpp
public void InformationToExtract()
```




