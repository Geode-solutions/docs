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

# class OpenGeodeRemeshDataException


```cpp
Inherits from OpenGeodeDataException
```



## Members

```cpp
public InspectionResult inspection_result

```



## Functions

### OpenGeodeRemeshDataException

```cpp
public void OpenGeodeRemeshDataException<InspectionResult>(InspectionResult inspection_result_in, const Args &... message)
```




