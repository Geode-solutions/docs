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

### VTPTriangulatedOutput

```cpp
public void VTPTriangulatedOutput<dimension>(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### write

```cpp
public vector write(const TriangulatedSurface<dimension> & surface)
```




