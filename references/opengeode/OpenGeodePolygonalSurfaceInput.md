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

# class OpenGeodePolygonalSurfaceInput


```cpp
Inherits from PolygonalSurfaceInput<dimension>
```



## Functions

### OpenGeodePolygonalSurfaceInput

```cpp
public void OpenGeodePolygonalSurfaceInput<dimension>(basic_string_view filename)
```


### additional_files

```cpp
public typename PolygonalSurfaceInput<dimension>::AdditionalFiles additional_files()
```


### read

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > read(const MeshImpl & impl)
```




