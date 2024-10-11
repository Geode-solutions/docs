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

# struct SkipNonMandatory


## Members

```cpp
public const MacroInfo<dimension> & info

```



## Functions

### SkipNonMandatory

```cpp
public void SkipNonMandatory<dimension>(const MacroInfo<dimension> & info_in)
```


### operator()

```cpp
public bool operator()(const MeshElement & element)
```




