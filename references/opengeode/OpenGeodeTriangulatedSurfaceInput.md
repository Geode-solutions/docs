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

# class OpenGeodeTriangulatedSurfaceInput


```cpp
Inherits from TriangulatedSurfaceInput<dimension>
```



## Functions

### OpenGeodeTriangulatedSurfaceInput

```cpp
public void OpenGeodeTriangulatedSurfaceInput<dimension>(basic_string_view filename)
```


### read

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > read(const MeshImpl & impl)
```




