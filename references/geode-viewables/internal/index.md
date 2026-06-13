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

# namespace internal



## Functions

### save_empty_light_viewable

```cpp
std::string save_empty_light_viewable(std::string_view filename_without_extension)
```


### save_light_viewable_bbox

```cpp
std::string save_light_viewable_bbox(const BoundingBox<dimension> & bbox, std::string_view filename_without_extension)
```


### save_light_viewable_object

```cpp
std::string save_light_viewable_object(const Object & object, std::string_view filename_without_extension)
```




