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

# class VTIGridInputImpl


```cpp
Inherits from VTKInputImpl<Mesh>
```



## Members

```cpp
public static const auto dimension

```



## Records

GridAttributes



## Functions

### VTIGridInputImpl

```cpp
public void VTIGridInputImpl<Mesh>(std::string_view filename)
```


### build_grid

```cpp
protected void build_grid(const pugi::xml_node & vtk_object)
```

### read_grid_attributes

```cpp
protected static GridAttributes read_grid_attributes(const pugi::xml_node & vtk_object)
```




