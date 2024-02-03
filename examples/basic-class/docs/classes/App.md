# App

The `cdk-stack` App construct is a wrapper around the [CDK App](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_core.App.html) construct. We use this construct internally for providing global context and methods to our `cdk-stack` constructs. This construct should be used as an entry point of your infrastructure at all times.

## Usage

```typescript
import { App, Stack } from 'cdk-stack';

const app = new App({ name: 'example-portal', region: 'eu-west-1' });

class SomeStack extends Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Your stack logic comes here
    // ...
  }
}

new SomeStack(stack, 'some-stack');
```


## Constructor

```ts
new App(props)
```