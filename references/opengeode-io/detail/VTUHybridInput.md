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

# class VTUHybridInput


```cpp
Inherits from HybridSolidInput<3>
```



## Functions

### VTUHybridInput

```cpp
public void VTUHybridInput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### read

```cpp
public unique_ptr read(const MeshImpl & impl)
```


### is_loadable

```cpp
public bool is_loadable()
```




