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

# class VTMOutputImpl


```cpp
Inherits from VTKOutputImpl<Model>
```



## Functions

### VTMOutputImpl

```cpp
public void VTMOutputImpl<Model, dimension>(string_view filename, const Model & brep)
```


### write_corners_lines_surfaces

```cpp
protected index_t write_corners_lines_surfaces(pugi::xml_node & object)
```


### files_directory

```cpp
protected string_view files_directory()
```




