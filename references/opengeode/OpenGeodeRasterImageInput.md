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

# class OpenGeodeRasterImageInput


```cpp
Inherits from RasterImageInput<dimension>
```



## Functions

### OpenGeodeRasterImageInput

```cpp
public void OpenGeodeRasterImageInput<dimension>(basic_string_view filename)
```


### read

```cpp
public RasterImage<dimension> read()
```




