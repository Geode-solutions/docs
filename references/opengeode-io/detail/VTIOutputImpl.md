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

# class VTIOutputImpl


```cpp
Inherits from detail::VTKOutputImpl<CellArray>
```



## Functions

### VTIOutputImpl

```cpp
protected void VTIOutputImpl<CellArray>(const CellArray & array, string_view filename)
```


### write_image_header

```cpp
protected xml_node write_image_header(pugi::xml_node & piece, const std::array<index_t, dimension> & extent)
```




