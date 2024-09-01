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

# class Output


```cpp
Inherits from IOFile
```



## Functions

### write

```cpp
public vector write(const Object & object)
```

### is_saveable

```cpp
public bool is_saveable(const Object & )
```


### Output

```cpp
protected void Output<Object>(basic_string_view filename)
```




