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

# class ImageInputImpl


## Functions

### ImageInputImpl

```cpp
public void ImageInputImpl(string_view filename)
```


### read_file

```cpp
public RasterImage read_file()
```


### read_reversed_y_axis_file

```cpp
public RasterImage read_reversed_y_axis_file()
```




