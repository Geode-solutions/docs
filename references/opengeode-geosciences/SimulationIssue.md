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

# struct SimulationIssue


## Members

```cpp
public SIMULATION_ISSUE_SEVERITY severity

```

```cpp
public SIMULATION_CHECK_STAGE stage

```

```cpp
public basic_string subject

```

```cpp
public basic_string message

```

```cpp
public basic_string fix

```

```cpp
public vector locations

```



## Functions

### SimulationIssue

```cpp
public void SimulationIssue()
```


### SimulationIssue

```cpp
public void SimulationIssue(SIMULATION_ISSUE_SEVERITY severity_in, SIMULATION_CHECK_STAGE stage_in, std::string subject_in, std::string message_in)
```


### add_location

```cpp
public SimulationIssueLocation & add_location(const Component3D & component)
```


 Add a location on the whole component

### is_error

```cpp
public bool is_error()
```


### string

```cpp
public std::string string()
```


 The issue, its locations and its fix, one per line



