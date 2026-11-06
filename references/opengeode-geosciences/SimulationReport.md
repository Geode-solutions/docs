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

# class SimulationReport


 Every issue found when checking that a simulator can simulate a problem on a model. The problem is simulable if there is no error.



## Functions

### add_error

```cpp
public void add_error(SIMULATION_CHECK_STAGE stage, std::string subject, const Args &... message)
```


 Error without fix nor location, the message pieces are concatenated

### add_warning

```cpp
public void add_warning(SIMULATION_CHECK_STAGE stage, std::string subject, const Args &... message)
```


 Warning without fix nor location, the message pieces are concatenated

### simulator

```cpp
public std::string_view simulator()
```


 Empty for the simulator independent checks

### set_simulator

```cpp
public void set_simulator(std::string simulator)
```


 Set by each simulator checker, e.g. "GEOS"

### model_name

```cpp
public std::string_view model_name()
```


### set_model_name

```cpp
public void set_model_name(std::string model_name)
```


### is_simulable

```cpp
public bool is_simulable()
```


### nb_errors

```cpp
public index_t nb_errors()
```


### nb_warnings

```cpp
public index_t nb_warnings()
```


### issues

```cpp
public const std::vector<SimulationIssue> & issues()
```


### issues

```cpp
public std::vector<const SimulationIssue *> issues(SIMULATION_CHECK_STAGE stage)
```


### string

```cpp
public std::string string()
```


 Verdict line, then issues grouped by stage. Element lists are truncated, use issues() for every element.

### add_issue

```cpp
public void add_issue(SimulationIssue issue)
```




