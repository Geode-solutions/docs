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

# class LSOOutput


```cpp
Inherits from StructuralModelOutput
```



## Functions

### LSOOutput

```cpp
public void LSOOutput(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### write

```cpp
public void write(const StructuralModel & structural_model)
```


### is_saveable

```cpp
public bool is_saveable(const StructuralModel & structural_model)
```




