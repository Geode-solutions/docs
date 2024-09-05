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

# struct BackgroundInsertionException


```cpp
Inherits from OpenGeodeException
```



## Members

```cpp
public vector not_inserted_elements

```



## Functions

### BackgroundInsertionException

```cpp
public void BackgroundInsertionException(const std::vector<index_t> & not_inserted_elements_in, optional failing_element, const Args &... message)
```




