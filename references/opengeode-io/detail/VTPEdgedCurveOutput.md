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

# class VTPEdgedCurveOutput


```cpp
Inherits from EdgedCurveOutput<dimension>
```



## Functions

### VTPEdgedCurveOutput

```cpp
public void VTPEdgedCurveOutput<dimension>(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### write

```cpp
public void write(const EdgedCurve<dimension> & curve)
```




# class VTPEdgedCurveOutput

# class VTPEdgedCurveOutput

