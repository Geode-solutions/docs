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

# class VTIRasterImageOutput


```cpp
Inherits from RasterImageOutput<dimension>
```



## Functions

### VTIRasterImageOutput

```cpp
public void VTIRasterImageOutput<dimension>(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### write

```cpp
public vector write(const RasterImage<dimension> & raster)
```




# class VTIRasterImageOutput


```cpp
Inherits from RasterImageOutput<3U>
```



# class VTIRasterImageOutput


```cpp
Inherits from RasterImageOutput<2U>
```



