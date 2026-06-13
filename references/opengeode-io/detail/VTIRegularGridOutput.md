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

# class VTIRegularGridOutput


```cpp
Inherits from RegularGridOutput<dimension>
```



## Functions

### VTIRegularGridOutput

```cpp
public void VTIRegularGridOutput<dimension>(std::string_view filename)
```


### write

```cpp
public std::vector<std::string> write(const RegularGrid<dimension> & grid)
```


### extension

```cpp
public static std::string_view extension()
```




# class VTIRegularGridOutput


```cpp
Inherits from RegularGridOutput<3U>
```



# class VTIRegularGridOutput


```cpp
Inherits from RegularGridOutput<2U>
```



