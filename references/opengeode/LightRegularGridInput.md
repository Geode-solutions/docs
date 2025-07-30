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

# class LightRegularGridInput


```cpp
Inherits from Input<LightRegularGrid<2U> >
```



# class LightRegularGridInput


```cpp
Inherits from Input<LightRegularGrid<3U> >
```



# class LightRegularGridInput


```cpp
Inherits from Input<LightRegularGrid<dimension> >
```



## Functions

### LightRegularGridInput

```cpp
protected void LightRegularGridInput<dimension>(basic_string_view filename)
```




