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

# class DotPolygonalOutput


```cpp
Inherits from PolygonalSurfaceOutput<dimension>
```



## Functions

### DotPolygonalOutput

```cpp
public void DotPolygonalOutput<dimension>(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### write

```cpp
public vector write(const PolygonalSurface<dimension> & surface)
```




# class DotPolygonalOutput


```cpp
Inherits from PolygonalSurfaceOutput<2U>
```



# class DotPolygonalOutput


```cpp
Inherits from PolygonalSurfaceOutput<3U>
```



