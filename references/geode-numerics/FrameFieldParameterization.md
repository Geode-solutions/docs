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

# class FrameFieldParameterization


## Records

ExtractedElements

Impl



## Functions

### FrameFieldParameterization

```cpp
public void FrameFieldParameterization(const FrameField & frame_field, double mesh_size)
```


### ~FrameFieldParameterization

```cpp
public void ~FrameFieldParameterization()
```


### compute_parameterization

```cpp
public void compute_parameterization()
```


### extract_elements

```cpp
public ExtractedElements extract_elements()
```




