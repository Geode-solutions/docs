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

# class VTPTriangulatedOutput


```cpp
Inherits from TriangulatedSurfaceOutput<3U>
```



# class VTPTriangulatedOutput


```cpp
Inherits from TriangulatedSurfaceOutput<2U>
```



# class VTPTriangulatedOutput


```cpp
Inherits from TriangulatedSurfaceOutput<dimension>
```



## Functions

### write

```cpp
public std::vector<std::string> write(const TriangulatedSurface<dimension> & surface)
```


### VTPTriangulatedOutput

```cpp
public void VTPTriangulatedOutput<dimension>(std::string_view filename)
```


### extension

```cpp
public static std::string_view extension()
```




