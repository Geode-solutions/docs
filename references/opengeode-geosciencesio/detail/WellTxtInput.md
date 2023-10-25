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

# class WellTxtInput


```cpp
Inherits from EdgedCurveInput<3>
```



## Functions

### WellTxtInput

```cpp
public void WellTxtInput(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### read

```cpp
public std::unique_ptr<EdgedCurve3D> read(const MeshImpl & impl)
```




