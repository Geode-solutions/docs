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

# class VTILightRegularGridOutput


```cpp
Inherits from LightRegularGridOutput<3U>
```



# class VTILightRegularGridOutput


```cpp
Inherits from LightRegularGridOutput<2U>
```



# class VTILightRegularGridOutput


```cpp
Inherits from LightRegularGridOutput<dimension>
```



## Functions

### write

```cpp
public std::vector<std::string> write(const LightRegularGrid<dimension> & grid)
```


### VTILightRegularGridOutput

```cpp
public void VTILightRegularGridOutput<dimension>(std::string_view filename)
```


### extension

```cpp
public static std::string_view extension()
```




