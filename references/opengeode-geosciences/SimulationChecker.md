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

# class SimulationChecker


 Checks that a simulator has everything it needs to simulate a problem on a model. The problem type (flow, solid mechanics or both, single phase or multiphase, isothermal or thermal) is inferred from the problem. Implementations are registered in SimulationCheckerFactory under the simulator name in lower case (e.g. "geos"). The checker keeps references to the problem and the model: they must outlive it.



## Functions

### SimulationChecker

```cpp
public void SimulationChecker(SimulationChecker && )
```


### SimulationChecker

```cpp
public void SimulationChecker(const SimulationChecker & )
```


### operator=

```cpp
public SimulationChecker & operator=(const SimulationChecker & )
```


### operator=

```cpp
public SimulationChecker & operator=(SimulationChecker && )
```


### problem

```cpp
protected const PhysicalProblem & problem()
```


### model

```cpp
protected const BRep & model()
```


### report

```cpp
protected SimulationReport & report()
```


 The report the checks add their issues to

### ~SimulationChecker

```cpp
public void ~SimulationChecker()
```


### check

```cpp
public SimulationReport check()
```


 Report every issue at once: the simulator independent checks (check_physical_problem_definition, check_physical_problem_regions and check_physical_problem_properties), then the simulator ones. The report is moved out of the checker: each call starts a new one.

### SimulationChecker

```cpp
protected void SimulationChecker(const PhysicalProblem & problem, const BRep & model)
```


### check_physical_problem_definition

```cpp
protected void check_physical_problem_definition()
```


 Check the problem consistency, independently of any simulator and model, as errors in the problem stage. Every issue is reported, except those depending on a missing part (e.g. compositions without fluid). The flow model and the fluid must match: SinglePhaseFluid has one phase, DeadOilFluid and Co2BrineFluid are multiphase. Only the content of the leaf classes defined in this library is checked: leaf classes registered by other libraries are accepted as is. Materials of solid mechanics without flow are reported as ignored.

### check_physical_problem_regions

```cpp
protected void check_physical_problem_regions()
```


 Check, in the regions stage, that the recorded model id, if any, matches and, with a flow model, that every region referenced by the problem is a Block or a collection of Blocks of the model (BlockCollection, StratigraphicUnit...) and that every Block is covered by exactly one material and one initial condition. Coverage is not checked without any material or initial condition: check_physical_problem_definition reports it. Materials and initial conditions covering no Block are warnings.

### check_physical_problem_properties

```cpp
protected void check_physical_problem_properties()
```


 Check, in the properties stage, the model physical properties that do not depend on the simulator. Properties the problem does not read are ignored (warning), except boundary conditions of a missing process and the bulk density with poromechanics (errors). For solid mechanics: positive elastic moduli on every Block, non-negative density (grain density with flow) on every Block when there is gravity, finite initial stresses, displacements uniform on each Surface and imposed along each axis, finite tractions. For poromechanics: Biot coefficient in (0, 1] on every Block and not below the porosity, and the thermal expansion coefficient on every Block of thermal problems. Warns if the mean initial stress is a tension in most cells, which suggests the opposite sign convention than the one declared by the problem.

### check_blocks

```cpp
protected void check_blocks()
```


 Every Block is meshed and its polyhedron vertices are unique vertices. Issues are in the mesh stage.

### check_unique_vertices_in_blocks

```cpp
protected void check_unique_vertices_in_blocks()
```


 Every unique vertex is a Block vertex, as convert_brep_into_solid needs

### check_physical_property

```cpp
protected PhysicalPropertyCoverage check_physical_property(const PhysicalPropertyRequirement & requirement)
```


 Check the property attribute on every component of the expected type: registered component type, element (not vertex) attribute, value type, values on every element if required, and value range (e.g. porosity in (0, 1], positive elastic moduli, finite stresses and pressures, fractions in [0, 1]). An unregistered property is an issue only if required. Issues are in the properties stage.

### check_rock_property_availability

```cpp
protected void check_rock_property_availability(absl::Span<const PhysicalPropertyCoverage> coverages)
```


 Error for each material lacking the porosity or permeability value of each coverage property on a meshed Block the model does not cover. The coverage properties must be porosity or permeability.

### check_physical_property_presence

```cpp
protected void check_physical_property_presence(const PhysicalPropertyCoverage & coverage, std::string_view consequence)
```


 Warning, followed by the consequence, if no component carries it

### warn_ignored_physical_properties

```cpp
protected void warn_ignored_physical_properties(absl::Span<const PHYSICAL_PROPERTY_NAME> properties)
```


 Warning, in the simulator stage, for each registered property the report simulator ignores although the problem reads it



